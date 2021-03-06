	addToConfig(window._SFGantt_config,{
		SFGantt:{
			menuText:{
				ZoomIn:			'图表放大',
				ZoomOut:		'图表缩小',
				FocusIntoView:		'转到任务',
				AddTask:		'新建任务',
				DeleteTask:		'删除任务',
				AddTasksLinks:		'链接任务',
				RemoveTasksLinks:	'取消链接',
				UpgradeTask:		'升级',
				DegradeTask:		'降级',
				Print:			'打印',
				CopyTask:		'复制任务',
				PasteTask:		'粘贴任务',
				ShowChart:		'显示图表',
				HideChart:		'隐藏图表',
				ShowList:		'显示列表',
				HideList:		'隐藏列表',
				Help:			'使用帮助',
				About:			'关于向日葵甘特'
			},
			noticeDelete:'确认要删除任务吗？注意：概要任务的子任务也会被删除！',
			noticeReadonly:'选中了一个或多个只读的任务，操作不能完成！'
		},
		SFGanttTasksMap:{
			tooltipTitle:{summary:'摘要',milestone:'里程碑',task:'任务',progress:'进度',tracking:'比较基准',link:'链接'}
		},
		SFGanttLinksMap:{
			tooltipTitle:{link:'任务链接'}
		},
		SFGanttTimeScrollNotice:{
			dateFormat:'yyyy年MM月dd日'
		},
		SFGanttTimeLine:{
			tooltipFormat:'yyyy年MM月dd日'
		},
		SFGanttField:{
			fieldTexts:{
				UID:'标识号',
				ID:'索引',
				TaskName:'任务名称',
				ResourceName:'资源名称',
				OutlineNumber:'大纲',
				StatusIcon:'状态',
				Duration:'工期',
				Start:'开始时间',
				Finish:'完成时间',
				Notes:'备注',
				ClassName:'样式',
				Critical:'关键',
				Selected:'选中',
				Resource:'资源名称',
				PercentComplete:'完成百分比',
				ActualStart:'实际开始时间',
				ActualFinish:'完成至此时间',
				ActualDuration:'实际工期',
				BaselineStart:'比较基准开始时间',
				BaselineFinish:'比较基准结束时间',
				ConstraintType:'约束类型',
				ConstraintDate:'约束时间',
				LinkType:'链接类型',
				FromTask:'从',
				ToTask:'到',
				PredecessorTask:'前置任务',
				SuccessorTask:'后置任务'
			},
			linkTypes:['完成-完成(FF)','完成-开始(FS)','开始-完成(SF)','开始-开始(SS)'],
			constraintTypes:['越早越好','越晚越好','必须开始于','必须完成于','不得早于...开始','不得晚于...开始','不得早于...完成','不得晚于...完成'],
			boolTypes:['否','是'],
			dateShowFormat:'yyyy年MM月dd日',
			dateInputFormat:'yyyy-MM-dd HH:mm:ss',
			noticeWrongFormat:'格式不正确',
			noticeEmptyTaskField:'任务域%0不存在!',
			noticeEmptyLinkField:'链接域%0不存在!',
			durationFormat:'%0个工作日',
			tooltipConstraint:"此任务有限制条件: \"%0\"，日期:%1",
			tooltipPercentComplete:"此任务在 %0 完成"
		},
		SFGlobal:{
			weekStrs:['日','一','二','三','四','五','六']
		},
		SFGanttCalendarItem:{
			formats:{
				Minute15:	'mm',
				Hour:		'M-d HH',
				Hour2:		'HH',
				Hour6:		'HH',
				Dat:		'M月d日（ddd）',
				Dat1:		'd',
				Day:		'ddd',
				Day3:		'd',
				Day7:		'd',
				Week:		'yyyy年M月d日',
				Month:		'yy年M月',
				Month1:		'M',
				Quarter:	'yyyy年第q季度',
				Quarter1:	'\\Qq',
				Quarter2:	'\\Hhhh',
				Year:		'yyyy年',
				Year1:		'yyyy',
				Year5:		'yyyy',
				Year10:		'yyyy'
			}
		}
	})