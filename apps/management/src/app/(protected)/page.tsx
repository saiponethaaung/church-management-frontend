"use client";
import {
  Avatar,
  Container,
  Grid,
  Group,
  LoadingOverlay,
  Text,
  Title,
} from "@mantine/core";
import { useGetChurchesQuery } from "@utils/graphql/generated/schema";
import Image from "next/image";
import classes from "./page.module.scss";
import { CreateChurch } from "@app/components/modal/create-church";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const { data, loading } = useGetChurchesQuery();

  return (
    <div className={classes.pageRoot}>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Image src="/next.svg" alt="" width={50} height={50} />
        </Container>
      </header>

      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <div className={classes.content}>
        {!loading && (data?.getChurchs?.pagination?.totalCount ?? 0) > 0 && (
          <div className={classes.selection}>
            <Title order={3}>Select a church to continue</Title>
            <Grid className={classes.list}>
              {data?.getChurchs?.data?.map((church, index) => (
                <Grid.Col span={{ base: 12, md: 4, sm: 6, xs: 12 }} key={index}>
                  <Link href={`/${church.id}`} className={classes.user}>
                    <Group>
                      <Avatar
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                        radius="xl"
                      />

                      <div style={{ flex: 1 }}>
                        <Text size="sm" fw={500}>
                          {church.name}
                        </Text>

                        {/* <Text c="dimmed" size="xs">
                      hspoonlicker@outlook.com
                    </Text> */}
                      </div>

                      <IconChevronRight size={14} stroke={1.5} />
                    </Group>
                  </Link>
                </Grid.Col>
              ))}
            </Grid>
          </div>
        )}
        {!loading && (data?.getChurchs?.pagination?.totalCount ?? 0) === 0 && (
          <CreateChurch />
        )}
      </div>
    </div>
  );
}
