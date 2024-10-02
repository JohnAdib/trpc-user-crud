import { UsersTable } from "@/components/users-table";
import { IUserWithoutPassword, UserRole, UserStatus } from "@/interfaces";

const sampleData: IUserWithoutPassword[] = [
  {
    firstName: "Lindsay Walton",
    lastName: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: UserRole.User,
    status: UserStatus.Active,
  },
  {
    firstName: "Lindsay Walton",
    lastName: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: UserRole.User,
    status: UserStatus.Active,
  },
  {
    firstName: "Lindsay Walton",
    lastName: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: UserRole.User,
    status: UserStatus.Active,
  },
  {
    firstName: "Lindsay Walton",
    lastName: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: UserRole.User,
    status: UserStatus.Active,
  },
];
export default function Page() {
  return <UsersTable users={sampleData} />;
}
