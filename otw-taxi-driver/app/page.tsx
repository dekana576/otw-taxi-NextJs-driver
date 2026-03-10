"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Pagination,
  addToast,
} from "@heroui/react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo } from "react";
import ButtonView from "./components/fragments/button/ButtonView";
import ButtonEdit from "./components/fragments/button/ButtonEdit";
import ButtonDelete from "./components/fragments/button/ButtonDelete";
import ButtonCreateDriver from "./components/fragments/button/ButtonCreateDriver";
import HomeImage from "./components/fragments/HomeImage";
import SearchBar from "./components/fragments/SearchBar";
import HomeLoading from "./components/page/HomeLoading";
import ConfirmDelete from "./components/fragments/ConfirmDelete";

const base_url =
  "https://22f766af-a68f-4e84-bab4-b02cde04069a.mock.pstmn.io/admin/users";

interface Iuser {
  user_id: string;
  name: string;
  email: string;
  address: string;
  gender: string;
}

export default function Home() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const { data: users = [], isLoading } = useQuery<Iuser[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get<{ data: Iuser[] }>(base_url);
      return response.data.data;
    },
  });

  // total halaman
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  if (isLoading) {
    return <HomeLoading />;
  }

  const handleDelete = async (user_id: string) => {
    try {
      await axios.delete(base_url, {
        params: { user_id },
      });

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      addToast({
        title: "Delete Driver Success",
        description: "Driver Deleted Successfully",
        color: "primary",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      addToast({
        title: "Delete Driver",
        description: "Driver Delete Failed",
        color: "danger",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
    }
  };

  return (
    <>
      <HomeImage />
      <div className="my-5">
        <Card>
          <CardHeader>
            <div className="w-full flex items-center justify-between">
              <SearchBar />
              <ButtonCreateDriver />
            </div>
          </CardHeader>

          <CardBody>
            <Table
              isStriped
              aria-label="Users table"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
            >
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>EMAIL</TableColumn>
                <TableColumn>GENDER</TableColumn>
                <TableColumn>ADDRESS</TableColumn>
                <TableColumn>ACTION</TableColumn>
              </TableHeader>

              <TableBody items={items}>
                {(user) => (
                  <TableRow key={user.user_id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell className="flex gap-2">
                      <ButtonView />
                      <ButtonEdit />
                      <ConfirmDelete
                        onConfirm={() => handleDelete(user.user_id)}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
