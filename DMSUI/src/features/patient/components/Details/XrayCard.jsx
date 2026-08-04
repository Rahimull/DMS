import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, FileText, Paperclip, Plus } from "lucide-react";
import { useState } from "react";

export default function XrayCard(){
    // باز بسته شدن تصاویر اکسری یا لابراتوار   
      const [openXray, setOpenXray] = useState(false);


      return(
        <Card className="rounded-[10px] mt-3
            bg-gradient-to-br from-white via-sky-50 to-indigo-100">
        <CardContent className="py-1 px-6">
          <div className="flex items-center justify-between mb-6"
            onClick={()=> setOpenXray(!openXray)} 
          >
            <div className="flex items-center gap-2" >
                
                {openXray ? (
                  <ChevronUp className="h-8 w-8 text-slate-600" />
                ) : (
                  <ChevronDown className="h-8 w-8 text-slate-600" />
                )}
                <h2 className="text-xl font-bold">فایل‌ها و تصاویر</h2>
            </div>
            <Button size="sm" variant="add" className="rounded-full"
                onClick={(e)=> e.stopPropagation()}
            >
              <Plus className="h-4 w-4 " />
            </Button>
          </div>

          {openXray && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <FileText className="h-10 w-10 text-red-500" />

                <p className="mt-4 text-sm font-medium">X-Ray.pdf</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <Paperclip className="h-10 w-10 text-blue-500" />

                <p className="mt-4 text-sm font-medium">Blood Test.pdf</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <FileText className="h-10 w-10 text-green-500" />

                <p className="mt-4 text-sm font-medium">Before.jpg</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition">
              <CardContent className="flex flex-col items-center justify-center p-8">
                <FileText className="h-10 w-10 text-indigo-500" />

                <p className="mt-4 text-sm font-medium">After.jpg</p>
              </CardContent>
            </Card>
          </div>
          )}
        </CardContent>
      </Card>
      );

}