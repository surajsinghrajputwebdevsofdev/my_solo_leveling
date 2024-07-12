// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import {
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
//   Form,
// } from "@/components/ui/form";
// import { signUpformSchemaStep1, signUpformSchemaStep2 } from "@/lib/schema";
// import { Input } from "@/components/ui/input";
// import { formSchema } from "@/lib/schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// type SignUpFormData1 = z.infer<typeof signUpformSchemaStep1>;
// type SignUpFormData2 = z.infer<typeof signUpformSchemaStep2>;
// export default function SignUp() {
//   const [emailVerification, setEmailVerification] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const resolver = !emailVerification
//     ? signUpformSchemaStep1
//     : signUpformSchemaStep2;

//   const form = useForm<SignUpFormData1 | SignUpFormData2>({
//     resolver: zodResolver(resolver),
//     defaultValues: {
//       email: "",
//       phoneNumber: "",
//       name: "",
//       password: "",
//       labName: "",
//     },
//   });

//   function onSubmit(values: SignUpFormData1 | SignUpFormData2) {
//     setIsLoading(true);
//     const email=values.email;
//     if (values && email) {
//       localStorage.setItem('userEmail', email);

//       fetch("http://localhost:7099/api/v1/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
        
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success) {
//                     setEmailVerification(true);
//                    } else {
//                     alert(data.message || 'Registration failed');
//                      }
//           setEmailVerification(true);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error(error);
//           setIsLoading(false);
//         });
//     }
//   }

//   return (
//     <div className="flex justify-between h-[calc(100vh-83px)] bg-primary dark:bg-secondary">
//       <div className="w-[60%] bg-gray-200 border-radius-fancy">
//         <div className="w-[50%] flex justify-center flex-col h-full m-auto space-y-2">
//           <h1 className="font-semibold text-4xl text-left dark:text-black">
//             Experience the <p className="text-primary">power of LabTrack</p>
//           </h1>
//           <p className="font-semibold text-primary">
//             With your 7 day trial, you get
//           </p>
//           <ul className="list-disc marker:text-primary marker:text-lg ml-[20px] dark:text-black">
//             <li>Prefilled sample data tailored for your laboratory</li>
//             <li>
//               Comprehensive laboratory management platform with 40+ specialized
//               tools
//             </li>
//             <li>
//               Templated experiment workflows, analytical reports, and visualized
//               data dashboards
//             </li>
//             <li>
//               Guided tours for lab administrators to maximize productivity
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="flex h-full max-h-[calc(100vh-84px)] justify-center w-full items-start p-10">
//         <Card className="max-w-md w-auto min-h-[300px] shadow-md p-4 mt-12">
//           <CardHeader>
//             <CardTitle className="text-center text-3xl text-primary font-signika">
//               Try LabTrack for 7 days
//             </CardTitle>
//             <CardDescription className="text-center text-md text-slate-600 dark:text-white">
//               No credit card. No commitments.
//             </CardDescription>
//           </CardHeader>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)}>
//               <CardContent className="space-y-2">
//                 <></>

//                 <>
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name*</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Enter Name"
//                             className="py-



//                               6"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="phoneNumber"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Phone Number*</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Enter Phone Number"
//                             className="py-6"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="labName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Laboratory Name*</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Enter Laboratory Name"
//                             className="py-6"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email Address*</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Enter Email"
//                             className="py-6"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             placeholder="Enter Password"
//                             className="py-6"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button
//                     loading={isLoading}
//                     className="p-6 w-32 ml-auto flex"
//                     type="submit"
//                     disabled={isLoading}
//                     children="Get OTP"
//                   />
//                 </>
//               </CardContent>
//             </form>
//           </Form>
//         </Card>
//       </div>
//     </div>
//   );
// }






"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import {signUpformSchemaStep2 } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

type SignUpFormData2 = z.infer<typeof signUpformSchemaStep2>;
export default function SignUp() {
  const [emailVerification, setEmailVerification] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const resolver = !emailVerification
    ? signUpformSchemaStep2
    : signUpformSchemaStep2;

  const form = useForm< SignUpFormData2>({
    resolver: zodResolver(resolver),
    defaultValues: {
      email: "",
      phoneNumber: "",
      name: "",
      password: "",
      labName: "",
    },
  });
  const router = useRouter();
  function onSubmit(values: SignUpFormData2) {
    setIsLoading(true);
    const email=values.email;
    if (values && email) {
      localStorage.setItem('userEmail', email);

      fetch("http://localhost:7099/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
                    setEmailVerification(true);

                   } else {
                    alert(data.message || 'Registration failed');
                     }
          setEmailVerification(true);
          router.push('/auth/otp-input'); 

          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }

  return (
    <div className="flex justify-between h-[calc(100vh-83px)] bg-primary dark:bg-secondary">
      <div className="w-[60%] bg-gray-200 border-radius-fancy">
        <div className="w-[50%] flex justify-center flex-col h-full m-auto space-y-2">
          <h1 className="font-semibold text-4xl text-left dark:text-black">
            Experience the <p className="text-primary">power of LabTrack</p>
          </h1>
          <p className="font-semibold text-primary">
            With your 7 day trial, you get
          </p>
          <ul className="list-disc marker:text-primary marker:text-lg ml-[20px] dark:text-black">
            <li>Prefilled sample data tailored for your laboratory</li>
            <li>
              Comprehensive laboratory management platform with 40+ specialized
              tools
            </li>
            <li>
              Templated experiment workflows, analytical reports, and visualized
              data dashboards
            </li>
            <li>
              Guided tours for lab administrators to maximize productivity
            </li>
          </ul>
        </div>
      </div>
      <div className="flex h-full max-h-[calc(100vh-84px)] justify-center w-full items-start p-10">
        <Card className="max-w-md w-auto min-h-[300px] shadow-md p-4 mt-12">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary font-signika">
              Try LabTrack for 7 days
            </CardTitle>
            <CardDescription className="text-center text-md text-slate-600 dark:text-white">
              No credit card. No commitments.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-2">
                <></>

                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Name"
                            className="py-



                              6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Phone Number"
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="labName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Laboratory Name*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Laboratory Name"
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Email"
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter Password"
                            className="py-6"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    loading={isLoading}
                    className="p-6 w-32 ml-auto flex"
                    type="submit"
                    disabled={isLoading}
                    children="Get OTP"
                  />
                </>
              </CardContent>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}
