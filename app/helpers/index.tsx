export function getDeclension (n: number, v1: string, v2: string, v3: string) {
	const i: string = String(n)[String(n).length - 1];

	switch (i) {
		case '1': 
			return v1;
		case '2' || '3' || '4': 
			return v2;
		default:
			return v3
	}
}