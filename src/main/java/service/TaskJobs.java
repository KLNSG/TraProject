/*
package service;

import com.kcloud.pd.jx.module.admin.medal.service.Medal;
import com.kcloud.pd.jx.module.admin.medal.service.MedalService;
import com.kcloud.pd.jx.module.admin.medal.service.QuotaRule;
import com.kcloud.pd.jx.module.consumer.mymedal.service.MyMedal;
import com.kcloud.pd.jx.module.consumer.mymedal.service.MyMedalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


/**
 * 需要执行的任务
 * @author Lvxin
 **//*

@Component("taskjobs")
public class TaskJobs {

    @Autowired
    private MyMedalService myMedalService;
    @Autowired
    private MedalService medalService;

    public void Medalassign(QuotaRule quotaRule){
        String[] positionids = quotaRule.getQuotaRange().split(QuotaRule.SYMBOL);
        List<Medal> medals = medalService.list();
        for (int i=0;i<positionids.length;i++){
            for (Medal medal:medals) {
                for (int j = 0; j < quotaRule.getQuotaNumber(); j++) {
                    MyMedal myMedal = new MyMedal();
                    myMedal.setUserId(positionids[i]);
                    myMedal.setMedalId(medal.getMedalId());
                    myMedal.setMedalName(medal.getMedalName());
                    myMedal.setIntegral(medal.getCorrespondingPoints());
                    myMedal.setMedaldescription(medal.getMedalDescription());
                    myMedal.setIsGrant(MyMedal.GRANT_STATUS_no);
                    myMedalService.save(myMedal);
                }
            }
        }
    }

}
*/
