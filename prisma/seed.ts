import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const posts: Prisma.PostCreateManyInput[] = [
        {
            id: 1,
            title: "Post 1",
            content: "This is the content of Post 1",
            published: true,
        },
        {
            id: 2,
            title: "Post 2",
            content: "This is the content of Post 2",
            published: true,
        },
    ];

    const videos: Prisma.VideoCreateManyInput[] = [
        {
            id: 1,
            title: "Video 1",
            content: "This is the content of Video 1",
            published: true,
        },
        {
            id: 2,
            title: "Video 2",
            content: "This is the content of Video 2",
            published: true,
        },
    ];

    const photos: Prisma.PhotoCreateManyInput[] = [
        {
            id: 1,
            title: "Photo 1",
            content: "This is the content of Photo 1",
            published: true,
        },
        {
            id: 2,
            title: "Photo 2",
            content: "This is the content of Photo 2",
            published: true,
        },
    ];

    const activities: Prisma.ActivityCreateManyInput[] = [
        {
            id: 1,
            activityableId: 1,
            activityableType: "Post",
            createdAt: new Date(),
        },
        {
            id: 2,
            activityableId: 2,
            activityableType: "Post",
            createdAt: new Date(),
        },
        {
            id: 3,
            activityableId: 1,
            activityableType: "Video",
            createdAt: new Date(),
        },
        {
            id: 4,
            activityableId: 2,
            activityableType: "Video",
            createdAt: new Date(),
        },
        {
            id: 5,
            activityableId: 1,
            activityableType: "Photo",
            createdAt: new Date(),
        },
        {
            id: 6,
            activityableId: 2,
            activityableType: "Photo",
            createdAt: new Date(),
        },
    ];

    // Seed the database with the sample data

    await prisma.post.createMany({ data: posts });

    await prisma.video.createMany({ data: videos });

    await prisma.photo.createMany({ data: photos });

    await prisma.activity.createMany({ data: activities });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
