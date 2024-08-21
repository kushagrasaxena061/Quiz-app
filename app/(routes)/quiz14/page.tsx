import Quiz5 from "@/components/Quiz/Quiz5";
import { client } from "@/sanity/lib/client";
import { fetchUsers } from "../../(auth)/actions/fetchUsers";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "round14"]{
  url,
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
      <Quiz5 questions={questions} userId={userId} />
    </>
  );
};

export default page;
