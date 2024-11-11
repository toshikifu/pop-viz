import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from "@remix-run/react";

import "./tailwind.css";

import ErrorIcon from "~/ErrorIcon";
import LoadingIcon from "~/LoadingIcon";
import IconBadge from "~/src/ui/IconBadge";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="font-body pl-8 pr-8">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function HydrateFallback() {
	return (
		<html lang="ja">
			<head>
				<title>pop-viz loading...</title>
				<Meta />
				<Links />
			</head>
			<body className="absolute flex items-center gap-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
				<IconBadge>
					<LoadingIcon />
				</IconBadge>
				<div>ローディング中です．</div>

				<Scripts />
			</body>
		</html>
	);
}
export function ErrorBoundary() {
	const error = useRouteError();
	console.error(error);
	return (
		<html lang="ja">
			<head>
				<title>エラーが発生しました</title>
				<Meta />
				<Links />
			</head>
			<body className="absolute flex items-center gap-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
				<IconBadge>
					<ErrorIcon />
				</IconBadge>
				<div>予期せぬエラーが発生しました．</div>

				<Scripts />
			</body>
		</html>
	);
}
