import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
// Default theme. ~960B
import '@vime/core/themes/default.css';

// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css';
import { DefaultUi, Player, Youtube } from "@vime/react";
// import { gql, useQuery } from "@apollo/client";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug : string;
}

// interface GetLessonBySlugQuery {
//   lesson: {
//     title: string
//     videoId: string
//     description: string
//     teacher: {
//       bio: string
//       avatarURL: string
//       name: string
//     }
//   }
// }
const log = console.log;
// const GET_LESSON_BY_SLUG_QUERY = gql `
  
// `

export function Video(props: VideoProps){
  // const { data, loading } = useQuery<GetLessonBySlugQuery>(GET_LESSON_BY_SLUG_QUERY, {
  //   variables: {
  //     slug: props.lessonSlug
  //   },
  //   fetchPolicy: 'no-cache'
  // })
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
         slug: props.lessonSlug,
        },
        fetchPolicy: 'no-cache'
  })
  // log(data);
  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
         <p>
        Carregando...
      </p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">
              {data.lesson.title} 
                </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description} 
                </p>

              {data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-6">
                <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL} 
                alt={data.lesson.teacher.name} />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name} </strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
              )}

            </div>
            <div className="flex flex-col gap-4">
              <a 
              target="blank" 
              href="https://discord-service.rocketseat.dev/signin/ignite-lab" 
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                <DiscordLogo size={24} />
                Comunidade do Discord
              </a>
              <a
              target="blank"  
              href="https://evento.rocketseat.com.br/ignite-lab/desafios/checkpoints" 
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24} />
                Acesse o Desafio
              </a>
            </div>

        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
            <a 
            target="blank" 
            href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Material Complementar</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o material complementar para acelerar o seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
            <a target="blank" 
            href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing" 
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Wallpapers Exclusivos</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize o seu Desktop
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
        </div>
      </div>
    </div>
  )
}