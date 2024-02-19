import { type Addon } from "../types";
import versions from "@site/docs/assets/json/Ayon_addons_version.json";

const addon: Addon = {
    title: "SyncSketch",
    description:
        "SyncSketch is a secure collaboration platform that accelerates work and review for media files including images, videos, 360-degree content, and 3D models. Artists can review projects offline or in real-time, with no compression artifacts or skipped frames.",
    icon: "syncsketch-icon.png",
    badge: versions.SyncSketch_Badge,
    features: [
        "appLauncher",
        "reviewables",
        "trayPublisher",
        "projectManager",
        "timersManager",
        "appLauncher",
    ],
    products: [],
    docs: {
        admin: "addon_syncsketch_admin",
    },
    github: "https://github.com/ynput/ayon-syncsketch/tree/develop",
};

export default addon;
