import { createCrudApi } from "@/api/crudApi";
import Api from "@/api/Api";


const base = createCrudApi("/Condition");


const ConditionApi = {

    ...base,


    // برای select ها
    lookup: async () => {

        const res = await Api.post(
            "/Condition/paged",
            {
                pageNumber:1,
                pageSize:1000
            }
        );


        const items =
            res.data?.data?.data ??
            [];


        return items.map(item => ({
            value:item.id,
            label:item.name
        }));

    }

};


export default ConditionApi;