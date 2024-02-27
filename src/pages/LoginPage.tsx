import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { LoginRegisterLayout } from "@/layouts/LoginRegisterLayout.tsx";
import {
  InputPasswordWithLabel,
  InputWithLabel,
} from "@/components/fragments/InputWithLabel.tsx";

const LoginPage = () => {
  return (
    <>
      <LoginRegisterLayout title="Login">
        <form>
          <div className="flex flex-col gap-y-7">
            <InputWithLabel label="Username" placeholder="Username" />
            <InputPasswordWithLabel
              label="Kata Sandi"
              placeholder="Kata Sandi"
            />

            <Button type="submit" variant="success">
              Login
            </Button>

            <div>
              <p className="text-center">
                Belum punya Akun?
                <Link to="/register" className="ml-1 text-success">
                  Daftar Disini
                </Link>
              </p>
              <div className="mt-2 flex justify-around">
                <Link to="/" className="ml-1 text-sm text-success">
                  About
                </Link>
                <Link to="/" className="ml-1 text-sm text-success">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </form>
      </LoginRegisterLayout>
    </>
  );
};

export default LoginPage;
