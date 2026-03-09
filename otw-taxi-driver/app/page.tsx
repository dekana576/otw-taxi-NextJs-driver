"use client";

import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  Pagination,
} from "@heroui/react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useMemo } from "react";

const base_url =
  "https://22f766af-a68f-4e84-bab4-b02cde04069a.mock.pstmn.io/admin/users";

interface Iuser {
  user_id: string;
  name: string;
  email: string;
  gender: string;
}

export default function Home() {
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
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="w-200">
        <div className="h-100 overflow-hidden justify-center items-center flex rounded-2xl my-5">
          <Image src="/img/image.png" alt="banner" />
        </div>

        <div className="my-5">
          <Card>
            <CardHeader>
              <div className="w-full flex items-center justify-end">
                <Button className="m-3" variant="ghost" color="warning">
                  Create Driver
                </Button>
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
                  <TableColumn>ACTION</TableColumn>
                </TableHeader>

                <TableBody items={items}>
                  {(user) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell className="flex gap-2">
                        <Button isIconOnly variant="ghost" color="primary" size="sm">
                          <FontAwesomeIcon icon={faEye} />
                        </Button>
                        <Button isIconOnly variant="ghost" color="warning" size="sm">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                        <Button isIconOnly variant="ghost" color="danger" size="sm">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </TableCell>
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
