import { db } from "@/db";

const fetchAllUsers = async () => {
  const allUsers = await db.user.findMany();
  return allUsers;
};

export { fetchAllUsers };
