"use client";

import PaginationLayout from "@app/components/layout/pagination/pagination.layout";
import { MemberCreateModal } from "@app/components/modal/member-create/member-create.modal";
import { Button, Container, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  const loadData = async (page: number) => {};

  return (
    <PaginationLayout
      total={0}
      // total={state.pagination.totalPages}
      paginate={(page) => loadData(page)}
      header={
        <Container
          fluid={true}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title order={5}>Members</Title>
          <Button variant="default" onClick={open}>
            Add Member
          </Button>
        </Container>
      }
    >
      Member list
      <MemberCreateModal
        opened={opened}
        close={(complete) => {
          if (complete) {
            close();
          } else {
            close();
          }
        }}
      />
    </PaginationLayout>
  );
}
