import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const posts: Prisma.PostCreateManyInput[] = [
    {
        title: "My First Post",
        content: "This is my very first blog post!",
        published: true,
    },
    {
        title: "10 Tips for Better Sleep",
        content:
            "Getting a good night's sleep is crucial for your health and well-being. Here are 10 tips to help you sleep better.",
        published: true,
    },
    {
        title: "Why I Love Hiking",
        content:
            "Hiking is one of my favorite outdoor activities. In this post, I share my top reasons for why I love it so much.",
        published: false,
    },
    {
        title: "The Benefits of Meditation",
        content:
            "Meditation has numerous benefits for both the mind and body. Learn more about the science behind this ancient practice.",
        published: false,
    },
    {
        title: "My Favorite Books of All Time",
        content:
            "As an avid reader, I've compiled a list of my all-time favorite books. Check it out!",
        published: true,
    },
];
const videos: Prisma.VideoCreateManyInput[] = [
    {
        title: "How to Make Pancakes",
        content:
            "In this video, I show you how to make fluffy and delicious pancakes from scratch.",
        published: true,
    },
    {
        title: "Yoga for Beginners",
        content:
            "If you're new to yoga, this video is a great place to start. I guide you through some basic poses and breathing techniques.",
        published: true,
    },
    {
        title: "My Travel Vlog: Japan",
        content:
            "Join me on my trip to Japan as I explore Tokyo, Kyoto, and more. Get a glimpse of the culture, food, and sights!",
        published: false,
    },
    {
        title: "How to Paint a Landscape",
        content:
            "Learn the basics of landscape painting in this step-by-step tutorial. Follow along and create your own masterpiece!",
        published: false,
    },
    {
        title: "Top 10 Movie Trailers of 2022",
        content:
            "As a movie buff, I've compiled a list of the top 10 most exciting movie trailers that are set to release in 2022.",
        published: true,
    },
];
const photos: Prisma.PhotoCreateManyInput[] = [
    {
        title: "Sunset at the Beach",
        content:
            "This beautiful photo was taken during a trip to Hawaii. The colors of the sky and ocean are simply breathtaking.",
        published: true,
    },
    {
        title: "Nature's Majesty",
        content:
            "I captured this photo while on a hike in the mountains. The view was absolutely stunning and I had to capture it.",
        published: true,
    },
    {
        title: "City Lights",
        content:
            "This photo was taken from a rooftop in New York City. The lights and skyline make for a beautiful and iconic view.",
        published: false,
    },
    {
        title: "Furry Friends",
        content:
            "I love taking photos of animals, and these two fluffy cats were too cute to resist.",
        published: false,
    },
    {
        title: "Autumn Colors",
        content:
            "Fall is my favorite season, and I love capturing the beauty of the changing leaves. This photo was taken in a local park.",
        published: true,
    },
];
const messages: Prisma.MessageCreateManyInput[] = [
    {
        title: "Happy Birthday!",
        content: "Wishing you a very happy birthday filled with love and joy.",
        published: true,
    },
    {
        title: "Congratulations!",
        content:
            "Congratulations on your new job! Wishing you all the best in your new role.",
        published: true,
    },
    {
        title: "Thank You",
        content:
            "Just wanted to say a quick thank you for all your help. I really appreciate it.",
        published: false,
    },
    {
        title: "Get Well Soon",
        content:
            "Sending you lots of love and well wishes for a speedy recovery.",
        published: false,
    },
    {
        title: "Happy Holidays!",
        content:
            "Wishing you and your loved ones a happy and joyous holiday season.",
        published: true,
    },
];

async function main() {
    try {
        console.log(`Start Seeding`);
        await prisma.post.createMany({ data: posts });
        console.log(`Seeded Posts`);
        await prisma.video.createMany({ data: videos });
        console.log(`Seeded Videos`);
        await prisma.photo.createMany({ data: photos });
        console.log(`Seeded Photos`);
        await prisma.message.createMany({ data: messages });
        console.log(`Seeded Messages`);
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
