import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";

export async function POST(req: NextRequest) {
  const currentUser = await fetchUsers();
  const username = currentUser?.data?.user.username || "";
  const email = currentUser?.data?.user.email || "";

  const body = await req.json();
  const { userId, quizScore, correctAnswers, wrongAnswers } = body;

  try {
    let existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { quizResults: true },
    });
    if (
      existingUser &&
      existingUser.quizResults &&
      existingUser.quizResults.length > 0
    ) {
      const updatedUserStats = await prisma.quizResult.update({
        where: { id: existingUser.quizResults[0].id },
        data: {
          quizScore: quizScore,
          correctAnswers: correctAnswers,
          wrongAnswers: wrongAnswers,
        },
      });
      return NextResponse.json({ updatedUserStats });
    } else {
      const newUser = await prisma.user.update({
        where: { id: userId },
        data: {
          quizResults: {
            create: {
              username,
              email,
              quizScore: quizScore,
              correctAnswers: correctAnswers,
              wrongAnswers: wrongAnswers,
            },
          },
        },
      });
      return NextResponse.json({ newUser });
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
