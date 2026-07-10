import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function DataTableAction({

  row,

  onView,

  onEdit,

  onDelete,

  showView = true,

  showEdit = true,

  showDelete = true,

}) {

  const item = row.original;


  return (

    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-slate-100"
        >

          <MoreHorizontal className="h-5 w-5"/>

        </Button>

      </DropdownMenuTrigger>


      <DropdownMenuContent align="end">


        {showView && (

          <DropdownMenuItem
            onClick={() => onView?.(item)}
          >

            <Eye className="mr-2 h-4 w-4"/>

            مشاهده

          </DropdownMenuItem>

        )}



        {showEdit && (

          <DropdownMenuItem
            onClick={() => onEdit?.(item)}
          >

            <Pencil className="mr-2 h-4 w-4"/>

            ویرایش

          </DropdownMenuItem>

        )}



        {showDelete && (

          <>

            <DropdownMenuSeparator/>


            <DropdownMenuItem
              onClick={() => onDelete?.(item.id)}
              className="
                text-red-600
                focus:text-red-600
              "
            >

              <Trash2 className="mr-2 h-4 w-4"/>

              حذف

            </DropdownMenuItem>

          </>

        )}


      </DropdownMenuContent>


    </DropdownMenu>

  );
}