export default function hello (name: string): string {
	const target = name || 'anonymous';
	return `Hello, ${target}!`;
}
