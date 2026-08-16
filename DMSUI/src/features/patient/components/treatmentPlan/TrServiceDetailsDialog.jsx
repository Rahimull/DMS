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
import RequirementForm from "../serviceSelectionStep/RequirementForm";

export default  function TrServiceDetailsDialog({
    open,
    onOpenChange,
    selectedServiceFee,
    formData,
    updateSection,
    fee,
    handleSaveFee,
}){
      

    return (
       <Dialog
        open={open}
        onOpenChange={onOpenChange}
        >
        <DialogContent
            dir="rtl"
            className=" flex
            max-h-[90vh]
            max-w-[95vw]
            min-w-[70vw]
            flex-col
            overflow-hidden"
        >
            <DialogHeader className="shrink-0">
            <DialogTitle className="text-center">
                افزودن جزییات خدمات
            </DialogTitle>
            </DialogHeader>

            {selectedServiceFee && (
            <div className="min-h-0 flex-1 overflow-y-auto space-y-5 pr-1">

                <div>
                <label className="mb-3 block text-sm font-semibold">
                    نیازمندی‌های خدمت
                </label>

                <RequirementForm
                    service={selectedServiceFee.data}
                    formData={formData}
                    updateSection={updateSection}
                />
                </div>

                <div className="rounded-xl border bg-slate-50 p-4">
                <p className="text-xs text-slate-500">
                    خدمت انتخاب شده
                </p>

                <p className="mt-1 font-bold text-slate-800">
                    {selectedServiceFee.label}
                </p>
                </div>

                <div>
                <label className="mb-2 block text-sm font-semibold">
                    فیس
                </label>

                <div className="relative">
                    <input
                    type="number"
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    className="h-11 w-full rounded-lg border border-slate-300 px-3 pe-16 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    placeholder="مبلغ فیس"
                    />

                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    AFN
                    </span>
                </div>
                </div>

                <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                >
                    لغو
                </Button>

                <Button
                    type="button"
                    variant="add"
                    onClick={handleSaveFee}
                >
                    ذخیره فیس
                </Button>
                </div>

            </div>
            )}
        </DialogContent>
        </Dialog>
    )

  
}