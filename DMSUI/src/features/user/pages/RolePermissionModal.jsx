import { useEffect, useState } from "react";


import Modal from "@/components/modal/Modal";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import RolesApi from "../api/RolesApi";
import PermissionApi from "../api/PermissionApi";

const RolePermissionModal = ({ open, onClose, role }) => {
  const [permissions, setPermissions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("Roles: ", role)

  useEffect(() => {
    if (!open || !role?.id) return;

    const load = async () => {
      try {
        setLoading(true);

        

        const [permRes, rolePermRes] = await Promise.all([
           PermissionApi.getAll(),
          RolesApi.getPermessions(role.id),
        ]);

       

        setPermissions(permRes.data ?? []);
        setSelected(rolePermRes.data ?? []);

      } catch (err) {
        toast.error("Failed to load permissions");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [open, role]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      await RolesApi.assignPermissions(role.id, {
        roleId: role.id,
        permissionIds: selected,
      });

      toast.success("Permissions updated");
      onClose();
    } catch (err) {
      toast.error("Failed to update permissions");
    } finally {
      setLoading(false);
    }
  };

  if (!open || !role) return null;



  return (
    <Modal open={open} onClose={onClose} title="Role Permissions">
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {loading ? (
          <p>Loading...</p>
        ) : (
          permissions.map((p) => (
            <label key={p.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(p.id)}
                onChange={() => toggle(p.id)}
              />
              {p.name}
            </label>
          ))
        )}
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={loading}>
          Save
        </Button>
      </div>

    </Modal>
  );
};

export default RolePermissionModal;