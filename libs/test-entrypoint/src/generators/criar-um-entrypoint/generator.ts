import { formatFiles,Tree} from '@nx/devkit';
import { CriarUmEntrypointGeneratorSchema } from './schema';
import { librarySecondaryEntryPointGenerator } from '@nx/angular/generators';
import converterEntryParaProjetoGenerator from '../converter-entry-para-projeto/generator';

export async function criarUmEntrypointGenerator(
  tree: Tree,
  options: CriarUmEntrypointGeneratorSchema
) { 
  await librarySecondaryEntryPointGenerator(tree , {
    name: options.name,
    library: "my-library"
  })

  await converterEntryParaProjetoGenerator(tree , {
    name: options.name
  })

  await formatFiles(tree)
}

export default criarUmEntrypointGenerator;
