// global.d.ts o en cualquier archivo de declaración de tipos
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined; // Se usa 'var' en vez de 'let' para evitar el error
}

export {};
