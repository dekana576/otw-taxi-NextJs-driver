"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url =
  "https://22f766af-a68f-4e84-bab4-b02cde04069a.mock.pstmn.io/admin/users";

interface Iuser {
  user_id: string;
  name: string;
  email: string;
  gender: string;
}

export default function Home() {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get<{ data: Iuser[] }>(base_url);
      return response.data.data;
    },
  });
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="w-200">
        <div className="h-100 overflow-clip justify-center items-center flex rounded-2xl my-5">
          <Image src="img/image.png" alt="" className="" />
        </div>

        <div className="my-5">
          <Card>
            <CardHeader>
              <div className="w-full flex items-center justify-end">
                <Button className="m-3" variant="ghost" color="warning">Create Driver</Button>
              </div>
            </CardHeader>

            <CardBody>
              <Table isStriped aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>EMAIL</TableColumn>
                  <TableColumn>GENDER</TableColumn>
                  <TableColumn>ACTION</TableColumn>
                </TableHeader>
                <TableBody items={users ?? []}>
                  {(user) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell>+++</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
