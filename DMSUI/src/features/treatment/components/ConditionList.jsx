import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus, Trash2, Edit } from "lucide-react";


const ConditionList = ({
  conditions = [],
  onAdd,
  onEdit,
  onDelete,
}) => {


  return (

    <Card>


      <CardHeader className="flex flex-row justify-between items-center">

        <CardTitle>
          🩺 Diagnosis / Conditions
        </CardTitle>


        <Button
          onClick={onAdd}
          size="sm"
        >

          <Plus size={16}/>

          Add

        </Button>


      </CardHeader>




      <CardContent>


        <div className="overflow-x-auto">


          <table className="w-full text-sm">


            <thead>

              <tr className="border-b">

                <th className="text-left p-3">
                  Condition
                </th>


                <th>
                  Severity
                </th>


                <th>
                  Date
                </th>


                <th>
                  Action
                </th>


              </tr>


            </thead>



            <tbody>


            {
              conditions.map((item)=>(


                <tr
                  key={item.id}
                  className="border-b"
                >


                  <td className="p-3">
                    {item.conditionName}
                  </td>


                  <td>
                    {item.severity}
                  </td>


                  <td>
                    {item.diagnosisDate}
                  </td>



                  <td className="flex gap-2">


                    <Button

                      size="icon"

                      variant="ghost"

                      onClick={()=>
                        onEdit(item)
                      }

                    >

                      <Edit size={16}/>

                    </Button>



                    <Button

                      size="icon"

                      variant="ghost"

                      onClick={()=>
                        onDelete(item.id)
                      }

                    >

                      <Trash2 size={16}/>

                    </Button>


                  </td>



                </tr>


              ))
            }


            </tbody>



          </table>


        </div>



      </CardContent>



    </Card>

  );

};


export default ConditionList;