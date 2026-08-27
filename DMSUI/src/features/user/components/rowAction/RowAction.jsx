import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreVertical } from "lucide-react";

const RowActions = ({ row, actions = [] }) => {
  if (!actions?.length) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            transition
            hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500/20
          "
        >
          <MoreVertical size={16} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={6}
        align="end"
        className="min-w-[180px]"
      >
        {actions.map((action) => (
          <DropdownMenuItem
            key={action.label}
            disabled={action.disabled}
            onSelect={(event) => {
              event.preventDefault();

              if (!action.disabled) {
                action.onClick?.(row);
              }
            }}
            className={`
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-lg
              px-3
              py-2
              text-sm
              outline-none
              transition
              ${
                action.danger
                  ? "text-red-600 focus:bg-red-50 focus:text-red-600"
                  : "focus:bg-gray-100"
              }
              ${action.className || ""}
            `}
          >
            {action.icon && (
              <span className="flex items-center">
                {action.icon}
              </span>
            )}

            <span>{action.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RowActions;