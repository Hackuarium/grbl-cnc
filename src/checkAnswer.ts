export function checkAnswer(input: string): {
  lines: string[];
  ok: boolean;
  error?: string;
} {
  const lines = input.split(/\r?\n/).filter((line) => line);
  const lastLine = lines.at(-1);
  if (lastLine === 'ok') {
    return { lines: lines.slice(0, -1), ok: true };
  }
  if (lastLine?.startsWith('error: ')) {
    return {
      lines: lines.slice(0, -1),
      ok: false,
      error: lastLine.replace('error: ', ''),
    };
  }
  return { lines, ok: false, error: 'Unknown error' };
}
