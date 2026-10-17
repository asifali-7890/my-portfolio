"use client";

interface ProjectVideoProps {
    src: string;
    title: string;
    playbackRate?: number;
    poster?: string;
}

export default function ProjectVideo({
    src,
    title,
    playbackRate = 2,
    poster,
}: ProjectVideoProps) {
    return (
        <section className="mb-7">
            <h2 className="mb-3 inline-block font-heading text-3xl leading-tight">
                Demo Video
            </h2>

            <p className="mb-4 text-sm text-muted-foreground">
                Watch the project walkthrough at {playbackRate}× speed.
            </p>

            <video
                controls
                playsInline
                preload="metadata"
                poster={poster}
                aria-label={title}
                className="w-full rounded-lg border bg-muted"
                onLoadedMetadata={(event) => {
                    event.currentTarget.playbackRate = playbackRate;
                }}
            >
                <source src={src} />
                Your browser does not support HTML5 video.
            </video>
        </section>
    );
}
