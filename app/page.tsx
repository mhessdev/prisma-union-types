import { PrismaClient, Activity, Post, Video, Photo } from "@prisma/client";

type ActivityFeedItem =
    | (Activity & { activityableType: "Post"; post: Post })
    | (Activity & { activityableType: "Video"; video: Video })
    | (Activity & { activityableType: "Photo"; photo: Photo });

function ActivityItem({ activity }: { activity: ActivityFeedItem }) {
    let contentType: string;
    let content: string | null;

    if (activity.activityableType === "Post") {
        contentType = "Post";
        content = activity.post.content;
    } else if (activity.activityableType === "Video") {
        contentType = "Video";
        content = activity.video.content;
    } else if (activity.activityableType === "Photo") {
        contentType = "Photo";
        content = activity.photo.content;
    } else {
        return null;
    }

    return (
        <div>
            <h3>{contentType}</h3>
            <p>{content}</p>
        </div>
    );
}

export default async function Home() {
    const prisma = new PrismaClient();
    const activities = await prisma.activity.findMany({
        include: {
            post: true,
            video: true,
            photo: true,
        },
    });

    const activityFeedItems: ActivityFeedItem[] = activities
        .map((activity) => {
            if (activity.activityableType === "Post" && activity.post) {
                return { ...activity, post: activity.post };
            } else if (
                activity.activityableType === "Video" &&
                activity.video
            ) {
                return { ...activity, video: activity.video };
            } else if (
                activity.activityableType === "Photo" &&
                activity.photo
            ) {
                return { ...activity, photo: activity.photo };
            } else {
                return null;
            }
        })
        .filter((activity) => activity !== null) as ActivityFeedItem[];

    return (
        <main className="flex gap-3 flex-col">
            {activityFeedItems.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
            ))}
        </main>
    );
}
