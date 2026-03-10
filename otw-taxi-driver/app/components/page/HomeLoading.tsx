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
  Skeleton,
} from "@heroui/react";

export default function HomeLoading() {
  return (
    <div className="my-5">
      <Card>
        <CardHeader>
          <div className="w-full flex items-center justify-between">
            <Skeleton className="w-40 h-10 rounded-lg" />
            <Skeleton className="w-32 h-10 rounded-lg" />
          </div>
        </CardHeader>

        <CardBody>
          <Table aria-label="Loading table">
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>GENDER</TableColumn>
              <TableColumn>ADDRESS</TableColumn>
              <TableColumn>ACTION</TableColumn>
            </TableHeader>

            <TableBody>
              {[...Array(5)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-32 rounded-lg" />
                  </TableCell>

                  <TableCell>
                    <Skeleton className="h-4 w-40 rounded-lg" />
                  </TableCell>

                  <TableCell>
                    <Skeleton className="h-4 w-20 rounded-lg" />
                  </TableCell>

                  <TableCell>
                    <Skeleton className="h-4 w-28 rounded-lg" />
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-10 rounded-lg" />
                      <Skeleton className="h-8 w-10 rounded-lg" />
                      <Skeleton className="h-8 w-10 rounded-lg" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}