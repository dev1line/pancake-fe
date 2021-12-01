import { Campaign } from 'config/constants/types'

import {  TranslatableText } from 'state/types'


// interface IfoMapResponse {
//   thresholdToClaim: string
//   campaignId: string
//   numberPoints: string
// }

export const getAchievementTitle = (campaign: Campaign): TranslatableText => {
  switch (campaign.type) {
    case 'ifo':
      return {
        key: 'IFO Shopper: %title%',
        data: {
          title: campaign.title as string,
        },
      }
    default:
      return campaign.title
  }
}

export const getAchievementDescription = (campaign: Campaign): TranslatableText => {
  switch (campaign.type) {
    case 'ifo':
      return {
        key: 'Committed more than $5 worth of LP in the %title% IFO',
        data: {
          title: campaign.title as string,
        },
      }
    default:
      return campaign.description
  }
}

/**
 * Checks if a wallet is eligible to claim points from valid IFO's
 */

