-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "scandate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificationdate" TIMESTAMP(3) NOT NULL,
    "path" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "filetype" TEXT NOT NULL,
    "filesize" INTEGER NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
