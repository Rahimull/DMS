import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  FileImage,
  FileText,
  Plus,
  Trash2,
  Pencil,
  Eye,
  Maximize2,
} from "lucide-react";
import { useState } from "react";

import useXray from "../../hooks/useXray";
import XrayForm from "@/features/xray/components/XrayForm";
import XrayApi from "@/features/xray/api/XrayApi";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";


export default function XrayCard({ patient }) {
  const [openXray, setOpenXray] = useState(false);

  const {
  patient: currentPatient,
  loadPatient,
} = useXray();

const xrays =
  currentPatient?.patientXrays ??
  patient?.patientXrays ??
  [];

  const XrayMessages = {
    create: "اکسرای با موفقیت ثبت شد.",
    update: "اطلاعات اکسرای با موفقیت ویرایش شد.",
    delete: "اکسرای با موفقیت حذف شد.",
  };

  const crudXray = useCreatUpdateForm(
    XrayApi,
    XrayMessages,
    {
      useFormData: true,
      onSuccess: loadPatient,
    }
  );

  // =========================================================
  // CREATE
  // =========================================================

  const handleCreateXray = () => {
    crudXray.openCreate({
      patientId: patient?.id,
    });
  };

  // =========================================================
  // EDIT
  // =========================================================
  const handleEditXray = (xray) => {
    crudXray.openEdit(xray)
  };

  // =========================================================
  // DELETE
  // =========================================================

  const handleDeleteXray = async (id) => {
    await crudXray.handleDelete(id);
  };



  return (
    <Card
      className="
        mt-4 overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-gradient-to-br from-white via-sky-100 to-indigo-200
        shadow-sm
      "
    >
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between">

          {/* Title */}
          <div
            className="flex cursor-pointer items-center gap-3"
            onClick={() => setOpenXray(!openXray)}
          >
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-500 to-indigo-600
                text-white
                shadow-md shadow-blue-200
              "
            >
              <FileImage className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-800">
                تصاویر و فایل‌های رادیولوژی
              </h2>

              <p className="mt-0.5 text-xs text-slate-400">
                {xrays.length > 0
                  ? `${xrays.length} فایل ثبت شده`
                  : "فایل رادیولوژی بیمار"}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Count */}
            {xrays.length > 0 && (
              <span
                className="
                  hidden rounded-full
                  bg-slate-50
                  px-3 py-1.5
                  text-xs font-medium
                  text-slate-500
                  sm:block
                "
              >
                {xrays.length}
              </span>
            )}

            {/* Add */}
            <Button
              size="sm"
              variant="add"
              className="
                h-9 w-9
                rounded-full
                p-0
                shadow-sm
              "
              onClick={(e) => {
                e.stopPropagation();
                handleCreateXray();
              }}
              title="افزودن X-Ray"
            >
              <Plus className="h-4 w-4" />
            </Button>

            {/* Toggle */}
            <button
              type="button"
              onClick={() => setOpenXray((prev) => !prev)}
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-xl
                bg-slate-50
                text-slate-500
                transition
                hover:bg-slate-100
              "
            >
              {openXray ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* GALLERY */}
      {/* ===================================================== */}

      {openXray && (
        <CardContent className="bg-slate-50/60 p-5 sm:p-6">

          {xrays.length === 0 ? (

            /* ================================================= */
            /* EMPTY STATE */
            /* ================================================= */

            <div
              className="
                flex min-h-[240px]
                flex-col items-center
                justify-center
                rounded-3xl
                border border-dashed
                border-slate-200
                bg-white
                px-6
              "
            >
              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-blue-50
                "
              >
                <FileImage className="h-8 w-8 text-blue-400" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-slate-700">
                هنوز تصویری ثبت نشده است
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                تصاویر رادیولوژی بیمار را در این بخش اضافه کنید
              </p>

              <Button
                size="sm"
                variant="outline"
                className="mt-5 rounded-full"
                onClick={handleCreateXray}
              >
                <Plus className="mr-1 h-4 w-4" />
                افزودن X-Ray
              </Button>
            </div>

          ) : (

            /* ================================================= */
            /* GALLERY GRID */
            /* ================================================= */

            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >
              {xrays.map((xray) => {

                const fileUrl = xray.filePath
                  ? `http://localhost:5223${xray.filePath}`
                  : null;

                const isPdf = xray.filePath
                  ?.toLowerCase()
                  .endsWith(".pdf");

                return (
                  <div
                    key={xray.id}
                    className="
                      group
                      overflow-hidden
                      rounded-3xl
                      border border-slate-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    {/* ========================================= */}
                    {/* IMAGE AREA */}
                    {/* ========================================= */}

                    <div
                      className="
                        relative
                        h-56
                        overflow-hidden
                        bg-slate-100
                      "
                    >
                      {fileUrl ? (

                        isPdf ? (

                          /* PDF */
                          <div
                            className="
                              flex h-full
                              flex-col
                              items-center
                              justify-center
                              bg-gradient-to-br
                              from-red-50
                              via-white
                              to-slate-50
                            "
                          >
                            <div
                              className="
                                flex h-20 w-20
                                items-center justify-center
                                rounded-3xl
                                bg-red-100
                              "
                            >
                              <FileText
                                className="
                                  h-10 w-10
                                  text-red-500
                                "
                              />
                            </div>

                            <span
                              className="
                                mt-3
                                rounded-full
                                bg-red-50
                                px-3 py-1
                                text-[10px]
                                font-bold
                                tracking-wider
                                text-red-500
                              "
                            >
                              PDF DOCUMENT
                            </span>
                          </div>

                        ) : (

                          /* IMAGE */
                          <img
                            src={fileUrl}
                            alt={xray.xrayName}
                            className="
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-110
                            "
                          />
                        )

                      ) : (

                        /* NO FILE */
                        <div
                          className="
                            flex h-full
                            items-center
                            justify-center
                          "
                        >
                          <FileImage
                            className="
                              h-14 w-14
                              text-slate-300
                            "
                          />
                        </div>
                      )}

                      {/* ========================================= */}
                      {/* TYPE BADGE */}
                      {/* ========================================= */}

                      {xray.xrayType && (
                        <div
                          className="
                            absolute
                            right-3 top-3
                            rounded-full
                            bg-white/90
                            px-3 py-1.5
                            text-[10px]
                            font-bold
                            text-slate-600
                            shadow-sm
                            backdrop-blur-md
                          "
                        >
                          {xray.xrayType}
                        </div>
                      )}

                      {/* ========================================= */}
                      {/* IMAGE HOVER */}
                      {/* ========================================= */}

                      {fileUrl && (
                        <div
                          className="
                            absolute inset-0
                            flex items-center
                            justify-center
                            bg-slate-950/0
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:bg-slate-950/35
                            group-hover:opacity-100
                          "
                        >
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex h-12 w-12
                              items-center
                              justify-center
                              rounded-2xl
                              bg-white
                              text-slate-700
                              shadow-xl
                              transition
                              hover:scale-110
                            "
                            title="مشاهده"
                          >
                            <Maximize2 className="h-5 w-5" />
                          </a>
                        </div>
                      )}
                    </div>

                    {/* ========================================= */}
                    {/* INFORMATION */}
                    {/* ========================================= */}

                    <div className="p-4">

                      <div className="flex items-start gap-3">

                        {/* Icon */}
                        <div
                          className="
                            flex h-9 w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-50
                          "
                        >
                          {isPdf ? (
                            <FileText
                              className="
                                h-4 w-4
                                text-red-500
                              "
                            />
                          ) : (
                            <FileImage
                              className="
                                h-4 w-4
                                text-blue-500
                              "
                            />
                          )}
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">

                          <h3
                            className="
                              truncate
                              text-sm
                              font-bold
                              text-slate-800
                            "
                            title={xray.xrayName}
                          >
                            {xray.xrayName}
                          </h3>

                          {xray.description ? (
                            <p
                              className="
                                mt-1
                                line-clamp-1
                                text-xs
                                text-slate-400
                              "
                            >
                              {xray.description}
                            </p>
                          ) : (
                            <p className="mt-1 text-xs text-slate-400">
                              تصویر رادیولوژی
                            </p>
                          )}

                        </div>
                      </div>

                      {/* ========================================= */}
                      {/* ACTIONS */}
                      {/* ========================================= */}

                      <div
                        className="
                          mt-4
                          flex items-center
                          justify-between
                          border-t
                          border-slate-100
                          pt-3
                        "
                      >

                        {/* View */}
                        {fileUrl ? (
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center
                              gap-1.5
                              text-xs
                              font-semibold
                              text-blue-600
                              transition
                              hover:text-blue-700
                            "
                          >
                            <Eye className="h-3.5 w-3.5" />
                            مشاهده
                          </a>
                        ) : (
                          <span
                            className="
                              text-xs
                              text-slate-400
                            "
                          >
                            بدون فایل
                          </span>
                        )}

                        {/* Edit / Delete */}
                        <div className="flex items-center gap-1.5">

                          {/* Edit */}
                          <button
                            type="button"
                            onClick={() =>
                              handleEditXray(xray)
                            }
                            className="
                              flex h-8 w-8
                              items-center
                              justify-center
                              rounded-xl
                              bg-amber-50
                              text-amber-600
                              transition
                              hover:bg-amber-100
                            "
                            title="ویرایش"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteXray(xray.id)
                            }
                            className="
                              flex h-8 w-8
                              items-center
                              justify-center
                              rounded-xl
                              bg-red-50
                              text-red-500
                              transition
                              hover:bg-red-100
                            "
                            title="حذف"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      )}

      {/* ===================================================== */}
      {/* FORM */}
      {/* ===================================================== */}

      <XrayForm
        CURD={crudXray}
        patient={currentPatient ?? patient}
      />
    </Card>
  );
}