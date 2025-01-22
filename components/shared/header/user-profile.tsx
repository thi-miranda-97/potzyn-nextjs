// "use client";

// import Link from "next/link";
// import { auth } from "@/auth";
// import { signOutUser } from "@/lib/actions/user.actions";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import { useState, useEffect } from "react";
// import { Session } from "next-auth"; // Import the Session type if using next-auth

// const UserProfile = () => {
//   const [session, setSession] = useState<Session | null>(null); // Use the correct type
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSession = async () => {
//       const userSession = await auth(); // auth() returns Session | null
//       setSession(userSession);
//       setLoading(false);
//     };

//     fetchSession();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!session || !session.user) {
//     return (
//       <Button asChild>
//         <Link href="/sign-in">
//           <PersonOutlineOutlinedIcon /> Sign In
//         </Link>
//       </Button>
//     );
//   }

//   const firstInitial = session.user.name?.charAt(0).toUpperCase() ?? "U";

//   return (
//     <div className="flex gap-2 items-center">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant="ghost"
//             className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-200"
//           >
//             {firstInitial}
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-56" align="end" forceMount>
//           <DropdownMenuLabel className="font-normal">
//             <div className="flex flex-col space-y-1">
//               <div className="text-sm font-medium leading-none">
//                 {session.user.name}
//               </div>
//               <div className="text-sm text-muted-foreground leading-none">
//                 {session.user.email}
//               </div>
//             </div>
//           </DropdownMenuLabel>

//           <DropdownMenuItem>
//             <Link href="/user/profile" className="w-full">
//               User Profile
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Link href="/user/orders" className="w-full">
//               Order History
//             </Link>
//           </DropdownMenuItem>

//           {session.user.role === "admin" && (
//             <DropdownMenuItem>
//               <Link href="/admin/overview" className="w-full">
//                 Admin
//               </Link>
//             </DropdownMenuItem>
//           )}

//           <DropdownMenuItem className="p-0 mb-1">
//             <form action={signOutUser} className="w-full">
//               <Button
//                 className="w-full py-4 px-2 h-4 justify-start"
//                 variant="ghost"
//               >
//                 Sign Out
//               </Button>
//             </form>
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };

// export default UserProfile;

export default function UserProfile() {
  return <div>PROFILE</div>;
}
