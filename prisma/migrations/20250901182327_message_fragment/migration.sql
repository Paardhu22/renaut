/*
  Warnings:

  - The values [RESULT,ERROR] on the enum `MessageRole` will be removed. If these variants are still used in the database, this will fail.
  - The values [USER,ASSISTANT] on the enum `MessageType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."MessageRole_new" AS ENUM ('USER', 'ASSISTANT');
ALTER TABLE "public"."Message" ALTER COLUMN "role" TYPE "public"."MessageRole_new" USING ("role"::text::"public"."MessageRole_new");
ALTER TYPE "public"."MessageRole" RENAME TO "MessageRole_old";
ALTER TYPE "public"."MessageRole_new" RENAME TO "MessageRole";
DROP TYPE "public"."MessageRole_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."MessageType_new" AS ENUM ('RESULT', 'ERROR');
ALTER TABLE "public"."Message" ALTER COLUMN "type" TYPE "public"."MessageType_new" USING ("type"::text::"public"."MessageType_new");
ALTER TYPE "public"."MessageType" RENAME TO "MessageType_old";
ALTER TYPE "public"."MessageType_new" RENAME TO "MessageType";
DROP TYPE "public"."MessageType_old";
COMMIT;
