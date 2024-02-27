import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { LoginRegisterLayout } from "@/layouts/LoginRegisterLayout.tsx";
import {
  InputPasswordWithLabel,
  InputWithLabel,
} from "@/components/fragments/InputWithLabel.tsx";

const RegisterPage = () => {
  return (
    <>
      <LoginRegisterLayout title="Register">
        <form>
          <div className="flex flex-col gap-y-7">
            <InputWithLabel label="Username" placeholder="Username" />
            <InputWithLabel label="Nama Lengkap" placeholder="Nama Lengkap" />
            <InputPasswordWithLabel
              label="Kata Sandi"
              placeholder="Kata Sandi"
            />
            <InputPasswordWithLabel
              label="Konfirmasi Kata Sandi"
              placeholder="Konfirmasi Kata Sandi"
            />

            <Button type="submit" variant="success">
              Register
            </Button>

            <Link to="/" className="ml-1 text-center text-success">
              Batal, Kembali ke Halaman Login
            </Link>
          </div>
        </form>
      </LoginRegisterLayout>
    </>
  );
};

export { RegisterPage };
