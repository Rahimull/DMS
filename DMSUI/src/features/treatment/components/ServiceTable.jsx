import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus, Trash2 } from "lucide-react";

const ServiceTable = ({ services = [], onChange, onAdd }) => {
  const removeService = (id) => {
    const result = services.filter((item) => item.id !== id);

    onChange(result);
  };

  const total = services.reduce(
    (sum, item) => sum + Number(item.total || 0),

    0,
  );

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>🦷 Treatment Services</CardTitle>

        <Button size="sm" onClick={onAdd}>
          <Plus size={16} />
          Add Service
        </Button>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left">Service</th>

                <th>Fee</th>

                <th>Qty</th>

                <th>Total</th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {services.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.serviceName}</td>

                  <td>
                    {item.fee}
                    AFN
                  </td>

                  <td>{item.quantity}</td>

                  <td>
                    {item.total}
                    AFN
                  </td>

                  <td>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeService(item.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-5 font-bold">
          Total: &nbsp;
          {total}
          AFN
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceTable;
