// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Dispatch, SetStateAction} from 'react';
import {RichContentCard} from '../Styles';
import {isPayloadList, isDivider, isChips, isRichContent} from '../utilities/typeguards';
import {Message, ListItem, RichContent} from '../utilities/types'
import {renderRichContent} from '../utilities/utils'
import {Chips} from './Chips';

export const ContentCard = ({message, apiURI, languageCode, addMessage, updateAgentMessage}: {
  message: Message,
  apiURI: string,
  languageCode?: string,
  addMessage: (message: Message) => void,
  updateAgentMessage: (r: any) => void,
}) => {
  const contentList = message.payload
  if (!contentList) return null;

  let sanitizedContent: RichContent[] = []
  let chips = []
  for (let i = 0; i < contentList.length; i++) {
    const content = contentList[i]
    if (isPayloadList(content)) {
      let items: Array<'DIVIDER' | ListItem> = []
      for (i; i < contentList.length; i++) {
        const item = contentList[i]
        if (isDivider(item)) {
          items.push('DIVIDER')
        } else if (isPayloadList(item)) {
          items.push(item)
        } else {
          i--;
          break;
        }
      }
      sanitizedContent.push({type: 'list', items})
    } else if (isChips(content)) {
      chips.push(content);
    } else if (isRichContent(content)) {
      sanitizedContent.push(content);
    }
  }

  return (
    <>
      {sanitizedContent.length > 0 && (
        <RichContentCard>
          {sanitizedContent.map((item, i) => renderRichContent(item, i, apiURI, addMessage, updateAgentMessage, languageCode))}
        </RichContentCard>
      )}
      {chips.map((chipObj, i) => <Chips key={i} chips={chipObj} />)}
    </>
  );
}
