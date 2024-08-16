import {
  addProjectConfiguration,
  formatFiles, 
  logger,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit'; 
import { ConverterEntryParaProjetoGeneratorSchema } from './schema';

export async function converterEntryParaProjetoGenerator(
  tree: Tree,
  options: ConverterEntryParaProjetoGeneratorSchema
) {

  const projectRoot = "libs/my-library/"  + options.name

  if(!tree.exists(projectRoot)){
    return logger.error("entrypoint not valid")
  }

  const isProjectJsonExists = tree.exists(`${projectRoot}/project.json`)

  if(isProjectJsonExists){
    return logger.info(`Entry point is already a project`)
  }

  const projectConfiguration = readProjectConfiguration(tree , "my-library")

  addProjectConfiguration(tree , `my-library/${options.name}`, {
    root:projectRoot,
    projectType: "library",
    sourceRoot: `${projectRoot}/src`,
    targets: {
        test: {
          executor: "@nx/jest:jest",
          outputs: [
            `{workspaceRoot}/coverage/{projectRoot}/${options.name}`
          ],
          options: {
            jestConfig:`${projectConfiguration.root}/jest.config.ts`
          }
        },
        lint:{
          executor:"@nx/eslint:lint", 
        }
    }
  })

  await formatFiles(tree)
}

export default converterEntryParaProjetoGenerator;
