"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import useLogin from "./hooks/useLogin"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie";

export function LoginForm() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<{ username: string, password: string }>();
  const { mutate } = useLogin();
  const onSubmit = (data: { username: string, password: string }) => {
    const { username, password } = data;
    const callBackReq = {
      onSuccess: (data: any) => {
        if (!data.error) {
          Cookies.set("token", data?.item?.token)
          router.push("/dashboard")
        } else {
          toast.error(data.message);
        }
      },
      onError() {
        toast.error("An unexpected error has occurred, try again");
      },
    };
    mutate({ username, password }, callBackReq);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username below to login to your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" required {...register("username", { required: true })} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required {...register("password", { required: true })} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
