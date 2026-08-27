import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  RollerCoaster,
  PaintRoller,
  UserPenIcon,
  User,
  RefreshCcw,
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
  onRole,
  onPermission,
  onStatus,
  
  showView = true,
  showEdit = true,
  showDelete = true,
  showRole=false,
  showPermission=false,
  showStatus=false,

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

          <DropdownMenuItem className="text-green-500"
            onClick={() => onView?.(item)}
          >

            <Eye className="mr-2 h-4 w-4"/>

            مشاهده

          </DropdownMenuItem>

        )}



        {showEdit && (

          <DropdownMenuItem  className="text-blue-500"
            onClick={() => onEdit?.(item)}
          >

            <Pencil className="mr-2 h-4 w-4"/>

            ویرایش

          </DropdownMenuItem>

        )}
        {showRole && (

          <DropdownMenuItem className="text-purple-600"
            onClick={() => onRole?.(item)}
          >

            <PaintRoller className="mr-2 h-4 w-4 "/>

            نقش (Role)

          </DropdownMenuItem>

        )}
        {showPermission && (

          <DropdownMenuItem className="text-gray-600"
            onClick={() => onPermission?.(item)}
          >

            <User className="mr-2 h-4 w-4 "/>

            صلاحیت (Permission)

          </DropdownMenuItem>

        )}
        {showStatus && (

          <DropdownMenuItem className="text-orange-600"
            onClick={() => onStatus?.(item)}
          >

            <RefreshCcw className="mr-2 h-4 w-4 "/>

            حالت (status)

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