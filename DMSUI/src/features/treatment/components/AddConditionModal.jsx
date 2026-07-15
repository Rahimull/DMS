import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import Input from "@/components/common/Input";

import { useEffect, useState } from "react";

import { createCrudApi } from "@/api/crudApi";



const conditionApi = createCrudApi("/Condition");



const AddConditionModal = ({
  open,
  onClose,
  patientId,
  onSave,
  editing=null
}) => {


  const [conditions,setConditions] = useState([]);



  const [form,setForm] = useState({

    conditionId:"",
    severity:"",
    diagnosisDate:"",
    result:1,
    notes:""

  });



  useEffect(()=>{

    loadConditions();

  },[]);



  useEffect(()=>{

    if(editing)
    {
      setForm(editing);
    }

  },[editing]);




  const loadConditions = async()=>{


    const data =
      await conditionApi.lookup({

        value:"id",

        label:(x)=>x.name

      });


    setConditions(data);

  };





  const submit = ()=>{


    onSave({

      ...form,

      patientId

    });


  };





return (

<Dialog
 open={open}
 onOpenChange={onClose}
>


<DialogContent>


<DialogHeader>

<DialogTitle>
🩺 Add Diagnosis
</DialogTitle>

</DialogHeader>



<div className="space-y-4">


{/* Condition */}

<div>

<label>
Condition
</label>


<select

className="w-full border rounded-md p-2"

value={form.conditionId}

onChange={(e)=>

setForm({

...form,

conditionId:e.target.value

})

}

>


<option>
Select Condition
</option>


{
conditions.map(c=>(

<option

key={c.value}

value={c.value}

>

{c.label}

</option>

))

}


</select>


</div>





{/* Severity */}

<div>

<label>
Severity
</label>


<select

className="w-full border rounded-md p-2"

value={form.severity}

onChange={(e)=>

setForm({

...form,

severity:e.target.value

})

}

>


<option value="">
Select
</option>


<option value="Low">
Low
</option>


<option value="Medium">
Medium
</option>


<option value="High">
High
</option>


</select>


</div>






<Input

label="Diagnosis Date"

type="date"

value={form.diagnosisDate}

onChange={(e)=>

setForm({

...form,

diagnosisDate:e.target.value

})

}

/>





<Input

label="Result"

type="number"

value={form.result}

onChange={(e)=>

setForm({

...form,

result:e.target.value

})

}

/>






<textarea

className="w-full border rounded-md p-3"

placeholder="Notes"

value={form.notes}

onChange={(e)=>

setForm({

...form,

notes:e.target.value

})

}

/>






<div className="flex justify-end gap-3">


<Button

variant="outline"

onClick={onClose}

>
Cancel
</Button>



<Button

onClick={submit}

>
Save
</Button>


</div>



</div>



</DialogContent>


</Dialog>

);


};


export default AddConditionModal;