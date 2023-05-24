-- CreateTable
CREATE TABLE "_CitaToPaciente" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CitaToPaciente_A_fkey" FOREIGN KEY ("A") REFERENCES "Cita" ("idCita") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CitaToPaciente_B_fkey" FOREIGN KEY ("B") REFERENCES "Paciente" ("cedula") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CitaToMedico" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CitaToMedico_A_fkey" FOREIGN KEY ("A") REFERENCES "Cita" ("idCita") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CitaToMedico_B_fkey" FOREIGN KEY ("B") REFERENCES "Medico" ("tarjetaProfesional") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "tarjetaProfesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idEspecialidad" INTEGER NOT NULL,
    "especialidadIdEspecialidad" INTEGER,
    CONSTRAINT "Medico_especialidadIdEspecialidad_fkey" FOREIGN KEY ("especialidadIdEspecialidad") REFERENCES "Especialidad" ("idEspecialidad") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("apellido", "consultorio", "email", "idEspecialidad", "nombre", "tarjetaProfesional", "telefono") SELECT "apellido", "consultorio", "email", "idEspecialidad", "nombre", "tarjetaProfesional", "telefono" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CitaToPaciente_AB_unique" ON "_CitaToPaciente"("A", "B");

-- CreateIndex
CREATE INDEX "_CitaToPaciente_B_index" ON "_CitaToPaciente"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CitaToMedico_AB_unique" ON "_CitaToMedico"("A", "B");

-- CreateIndex
CREATE INDEX "_CitaToMedico_B_index" ON "_CitaToMedico"("B");
