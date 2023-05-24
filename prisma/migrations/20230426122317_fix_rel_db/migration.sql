/*
  Warnings:

  - You are about to drop the `_CitaToMedico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CitaToPaciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `especialidadIdEspecialidad` on the `Medico` table. All the data in the column will be lost.
  - You are about to drop the column `idEspecialidad` on the `Medico` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_CitaToMedico_B_index";

-- DropIndex
DROP INDEX "_CitaToMedico_AB_unique";

-- DropIndex
DROP INDEX "_CitaToPaciente_B_index";

-- DropIndex
DROP INDEX "_CitaToPaciente_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CitaToMedico";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CitaToPaciente";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaCita" DATETIME NOT NULL,
    "cedulaPaciente" INTEGER NOT NULL,
    "tarjetaProfesional" INTEGER NOT NULL,
    "pacienteCedula" INTEGER,
    "medicoTarjetaProfesional" INTEGER,
    CONSTRAINT "Cita_pacienteCedula_fkey" FOREIGN KEY ("pacienteCedula") REFERENCES "Paciente" ("cedula") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cita_medicoTarjetaProfesional_fkey" FOREIGN KEY ("medicoTarjetaProfesional") REFERENCES "Medico" ("tarjetaProfesional") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("cedulaPaciente", "fechaCita", "idCita", "tarjetaProfesional") SELECT "cedulaPaciente", "fechaCita", "idCita", "tarjetaProfesional" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
CREATE TABLE "new_Medico" (
    "tarjetaProfesional" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "IdEspecialidad" INTEGER,
    CONSTRAINT "Medico_IdEspecialidad_fkey" FOREIGN KEY ("IdEspecialidad") REFERENCES "Especialidad" ("idEspecialidad") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("apellido", "consultorio", "email", "nombre", "tarjetaProfesional", "telefono") SELECT "apellido", "consultorio", "email", "nombre", "tarjetaProfesional", "telefono" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
