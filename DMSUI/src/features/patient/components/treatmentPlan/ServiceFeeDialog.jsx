import { Button } from "@/components/ui/button";
import WizardForm from "@/components/form/WizrdForm";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";
import { ServiceFeeFields } from "../../fields/ServiceFeeFields";

export default function ServiceFeeDialog({
  open,
  onClose,
  onSave,
  condition,
  detail,
  onChange,
}) {

    const [localData, setLocalData] = useState({});
    useEffect(()=>{
        if(detail){
            setLocalData(detail);
        }
    },[detail, open]);
  if (!detail) return null;

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value, typeof e.target.value);
    const {name, value} = e.target;
    setLocalData((perv)=> ({
        ...perv,
        [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(localData);
    onClose();
  };

  const handleCancel = () => {
    setLocalData(detail);
    onClose();
    };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="min-w-[700px] [&>button]:left-4 [&>button]:right-auto"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="text-center pt-2">
            {condition?.name}
          </DialogTitle>
        </DialogHeader>

        <WizardForm
          title=""
          description=""
          columns={1}
          fields={ServiceFeeFields}
          values={localData}
          onChange={handleChange}
          padding="p-3"
          border={false}
        />

        <DialogFooter className="mt-3 gap-2">
          <Button type="button" variant="outline" onClick={handleCancel}>
            انصراف
          </Button>

          <Button type="button" onClick={handleSave}>
            ثبت معلومات
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
