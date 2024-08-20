import Quiz4 from "@/components/Quiz";
import { client } from "@/sanity/lib/client";
import { fetchUsers } from "../(auth)/actions/fetchUsers";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "questions4"]{
    question,
    answers,
    correctAnswer
  }`;

  const data = await client.fetch(query);

  return data;
}

const page = async () => {
  const questions = await getData();
  const user = await fetchUsers();
  const userId = user?.data.user.id;
  return (
    <>
      <Quiz4 questions={questions} userId={userId} />
    </>
  );
};

export default page;
