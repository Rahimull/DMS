import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Input from "@/components/common/Input";



const TreatmentHeader = ({
  form,
  setForm,
  patientOptions=[],
  staffOptions=[]
}) => {


const change = (key,value)=>{

    setForm(prev=>({
        ...prev,
        [key]:value
    }));

};



return (

<Card>

<CardHeader>

<CardTitle>
📝 Treatment Information
</CardTitle>

</CardHeader>


<CardContent>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4">



{/* Patient */}

<div>

<label>
Patient *
</label>


<select

className="w-full border rounded-md p-2"

value={form.patientId || ""}

onChange={(e)=>
change(
"patientId",
Number(e.target.value)
)
}

>


<option value="">
Select Patient
</option>


{
patientOptions.map(item=>(

<option

key={item.value}

value={item.value}

>

{item.label}

</option>

))

}


</select>


</div>





{/* Doctor */}

<div>

<label>
Doctor *
</label>


<select

className="w-full border rounded-md p-2"

value={form.staffId || ""}

onChange={(e)=>
change(
"staffId",
Number(e.target.value)
)
}

>


<option value="">
Select Doctor
</option>


{
staffOptions.map(item=>(

<option

key={item.value}

value={item.value}

>

{item.label}

</option>

))

}


</select>


</div>





<Input

label="Start Date"

type="date"

value={form.startDate || ""}

onChange={(e)=>
change(
"startDate",
e.target.value
)
}

/>





<Input

label="End Date"

type="date"

value={form.endDate || ""}

onChange={(e)=>
change(
"endDate",
e.target.value
)
}

/>





<div>

<label>
Status
</label>


<select

className="w-full border rounded-md p-2"

value={form.status || ""}

onChange={(e)=>
change(
"status",
e.target.value
)
}

>


<option value="">
Select
</option>


<option value="Draft">
Draft
</option>


<option value="Active">
Active
</option>


<option value="Completed">
Completed
</option>


<option value="Cancelled">
Cancelled
</option>


</select>


</div>





<Input

label="Round"

type="number"

value={form.round || 1}

onChange={(e)=>
change(
"round",
e.target.value
)
}

/>





<Input

label="Installments"

type="number"

value={form.installments || 1}

onChange={(e)=>
change(
"installments",
e.target.value
)
}

/>





<Input

label="Discount"

type="number"

value={form.discount || 0}

onChange={(e)=>
change(
"discount",
e.target.value
)
}

/>



</div>


</CardContent>

</Card>

);


};


export default TreatmentHeader;