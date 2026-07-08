import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function OldShirtRoute({ params }: Props) {
  const { id } = await params;
  redirect(`/shirt/${id}`);
}
