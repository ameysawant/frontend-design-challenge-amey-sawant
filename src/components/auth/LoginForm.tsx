import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/router/routes";
import AppleIcon from "@/components/icons/AppleIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import MetaIcon from "@/components/icons/MetaIcon";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="w-full max-w-sm rounded-2xl border-0 overflow-hidden">
      <CardHeader className="text-center px-8">
        <CardTitle className="text-3xl font-semibold tracking-tight">
          Login
        </CardTitle>
        <CardDescription className="text-sm font-medium text-paragraph mt-2">
          Don't have an account?{" "}
          <Link
            to={ROUTES.signup}
            className="text-teal-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-8">
        <form className="space-y-5">
          <Input id="email" type="email" placeholder="Email Address" />

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? (
                <Eye className="size-4" />
              ) : (
                <EyeClosed className="size-4" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2">
              <Checkbox id="rememberMe" />
              <Label
                htmlFor="rememberMe"
                className="text-sm text-paragraph cursor-pointer select-none"
              >
                Remember me
              </Label>
            </div>
            <Link
              to="#"
              className="text-sm font-semibold text-teal-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-4 px-8">
        <Button
          type="submit"
          className="w-full rounded-full bg-teal-500 hover:bg-teal-600 h-10 shadow-lg shadow-teal-500/20"
        >
          Login
        </Button>
        <div className="flex flex-col items-center gap-3 mt-1">
          <div className="flex items-center gap-2 mt-2">
            <Link
              to="#"
              className="bg-black text-white rounded-full py-2 px-8 transition-opacity hover:opacity-90"
            >
              <AppleIcon />
            </Link>
            <Link
              to="#"
              className="bg-[#f9f2ef] rounded-full py-2 px-8 transition-opacity hover:opacity-90"
            >
              <GoogleIcon />
            </Link>
            <Link
              to="#"
              className="bg-[#3d6ddf] text-white rounded-full py-2 px-8 transition-opacity hover:opacity-90"
            >
              <MetaIcon />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
