import { useState } from "react";
import { useNavigate } from "react-router-dom";


import Input from "@/components/common/Input";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await login(form);
      if(form.userName === "rahim" && form.password === "123"){
        navigate("/dashboard")
      }

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left Side */}
      <div className="hidden lg:flex flex-1 
        bg-gradient-to-l from-blue-700 to-white text-white p-12 flex-col justify-center">
        <h2 className="text-5xl font-bold mb-4">
        DMS
        </h2>

        <p className="text-xl opacity-90 mb-6">
            سیستم مدریتی کلینیک دندان و زیبای نورستانی
        </p>

        <p className="leading-relaxed text-blue-100 text-center">
          مدیریت مریض ها، نوبت دهی، نسخه نویسی، گدام داری، بخش مالی، مدیریت کارمندان و عملیات ها از سیستم مرکزی.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-xl">
            <h3 className="font-semibold">مریض ها</h3>
            <p className="text-sm opacity-80">
              ریکارد های ثبت
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            <h3 className="font-semibold">داکتر</h3>
            <p className="text-sm opacity-80">
              نسخه نویسی
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            <h3 className="font-semibold">فارمسی</h3>
            <p className="text-sm opacity-80">
              گدام داری و فروشات
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl">
            <h3 className="font-semibold">بخش مالی</h3>
            <p className="text-sm opacity-80">
              پرداخت ها و بل
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>

            <h2 className="text-3xl font-bold mt-4">
              خوش آمدید
            </h2>

            <p className="text-gray-500 mt-2">
              وارد شوید و ادامه...
            </p>
          </div>

          <div className="space-y-4">
            <Input
              label="کابر"
              name="userName"
              value={form.userName}
              onChange={handleChange}
            />

            <Input
              label="رمز عبور"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />

            <Button
              variant="add"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full"
            >
              {loading ? " در حال وارد شدن..." : "وارد"}
            </Button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            DMS © 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;