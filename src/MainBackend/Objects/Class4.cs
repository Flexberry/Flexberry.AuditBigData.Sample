﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Flexberry.Sample.AuditBigData
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Class4.
    /// </summary>
    // *** Start programmer edit section *** (Class4 CustomAttributes)

    // *** End programmer edit section *** (Class4 CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("AuditView", new string[] {
            "Field41 as \'Field41\'",
            "Field42 as \'Field42\'",
            "CreateTime as \'Create time\'",
            "Creator as \'Creator\'",
            "EditTime as \'Edit time\'",
            "Editor as \'Editor\'"})]
    [View("Class4E", new string[] {
            "Field41 as \'Field41\'",
            "Field42 as \'Field42\'"})]
    [View("Class4L", new string[] {
            "Field41 as \'Field41\'",
            "Field42 as \'Field42\'",
            "CreateTime",
            "Creator",
            "EditTime",
            "Editor"})]
    public class Class4 : ICSSoft.STORMNET.DataObject, IDataObjectWithAuditFields
    {
        
        private string fField41;
        
        private string fField42;
        
        private System.Nullable<System.DateTime> fCreateTime;
        
        private string fCreator;
        
        private System.Nullable<System.DateTime> fEditTime;
        
        private string fEditor;
        
        // *** Start programmer edit section *** (Class4 CustomMembers)

        // *** End programmer edit section *** (Class4 CustomMembers)

        
        /// <summary>
        /// Field41.
        /// </summary>
        // *** Start programmer edit section *** (Class4.Field41 CustomAttributes)

        // *** End programmer edit section *** (Class4.Field41 CustomAttributes)
        [StrLen(255)]
        public virtual string Field41
        {
            get
            {
                // *** Start programmer edit section *** (Class4.Field41 Get start)

                // *** End programmer edit section *** (Class4.Field41 Get start)
                string result = this.fField41;
                // *** Start programmer edit section *** (Class4.Field41 Get end)

                // *** End programmer edit section *** (Class4.Field41 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class4.Field41 Set start)

                // *** End programmer edit section *** (Class4.Field41 Set start)
                this.fField41 = value;
                // *** Start programmer edit section *** (Class4.Field41 Set end)

                // *** End programmer edit section *** (Class4.Field41 Set end)
            }
        }
        
        /// <summary>
        /// Field42.
        /// </summary>
        // *** Start programmer edit section *** (Class4.Field42 CustomAttributes)

        // *** End programmer edit section *** (Class4.Field42 CustomAttributes)
        [StrLen(255)]
        public virtual string Field42
        {
            get
            {
                // *** Start programmer edit section *** (Class4.Field42 Get start)

                // *** End programmer edit section *** (Class4.Field42 Get start)
                string result = this.fField42;
                // *** Start programmer edit section *** (Class4.Field42 Get end)

                // *** End programmer edit section *** (Class4.Field42 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class4.Field42 Set start)

                // *** End programmer edit section *** (Class4.Field42 Set start)
                this.fField42 = value;
                // *** Start programmer edit section *** (Class4.Field42 Set end)

                // *** End programmer edit section *** (Class4.Field42 Set end)
            }
        }
        
        /// <summary>
        /// CreateTime.
        /// </summary>
        // *** Start programmer edit section *** (Class4.CreateTime CustomAttributes)

        // *** End programmer edit section *** (Class4.CreateTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (Class4.CreateTime Get start)

                // *** End programmer edit section *** (Class4.CreateTime Get start)
                System.Nullable<System.DateTime> result = this.fCreateTime;
                // *** Start programmer edit section *** (Class4.CreateTime Get end)

                // *** End programmer edit section *** (Class4.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class4.CreateTime Set start)

                // *** End programmer edit section *** (Class4.CreateTime Set start)
                this.fCreateTime = value;
                // *** Start programmer edit section *** (Class4.CreateTime Set end)

                // *** End programmer edit section *** (Class4.CreateTime Set end)
            }
        }
        
        /// <summary>
        /// Creator.
        /// </summary>
        // *** Start programmer edit section *** (Class4.Creator CustomAttributes)

        // *** End programmer edit section *** (Class4.Creator CustomAttributes)
        [StrLen(255)]
        public virtual string Creator
        {
            get
            {
                // *** Start programmer edit section *** (Class4.Creator Get start)

                // *** End programmer edit section *** (Class4.Creator Get start)
                string result = this.fCreator;
                // *** Start programmer edit section *** (Class4.Creator Get end)

                // *** End programmer edit section *** (Class4.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class4.Creator Set start)

                // *** End programmer edit section *** (Class4.Creator Set start)
                this.fCreator = value;
                // *** Start programmer edit section *** (Class4.Creator Set end)

                // *** End programmer edit section *** (Class4.Creator Set end)
            }
        }
        
        /// <summary>
        /// EditTime.
        /// </summary>
        // *** Start programmer edit section *** (Class4.EditTime CustomAttributes)

        // *** End programmer edit section *** (Class4.EditTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (Class4.EditTime Get start)

                // *** End programmer edit section *** (Class4.EditTime Get start)
                System.Nullable<System.DateTime> result = this.fEditTime;
                // *** Start programmer edit section *** (Class4.EditTime Get end)

                // *** End programmer edit section *** (Class4.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class4.EditTime Set start)

                // *** End programmer edit section *** (Class4.EditTime Set start)
                this.fEditTime = value;
                // *** Start programmer edit section *** (Class4.EditTime Set end)

                // *** End programmer edit section *** (Class4.EditTime Set end)
            }
        }
        
        /// <summary>
        /// Editor.
        /// </summary>
        // *** Start programmer edit section *** (Class4.Editor CustomAttributes)

        // *** End programmer edit section *** (Class4.Editor CustomAttributes)
        [StrLen(255)]
        public virtual string Editor
        {
            get
            {
                // *** Start programmer edit section *** (Class4.Editor Get start)

                // *** End programmer edit section *** (Class4.Editor Get start)
                string result = this.fEditor;
                // *** Start programmer edit section *** (Class4.Editor Get end)

                // *** End programmer edit section *** (Class4.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class4.Editor Set start)

                // *** End programmer edit section *** (Class4.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (Class4.Editor Set end)

                // *** End programmer edit section *** (Class4.Editor Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "AuditView" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AuditView
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(Flexberry.Sample.AuditBigData.Class4));
                }
            }
            
            /// <summary>
            /// "Class4E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Class4E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Class4E", typeof(Flexberry.Sample.AuditBigData.Class4));
                }
            }
            
            /// <summary>
            /// "Class4L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Class4L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Class4L", typeof(Flexberry.Sample.AuditBigData.Class4));
                }
            }
        }
        
        /// <summary>
        /// Audit class settings.
        /// </summary>
        public class AuditSettings
        {
            
            /// <summary>
            /// Включён ли аудит для класса.
            /// </summary>
            public static bool AuditEnabled = true;
            
            /// <summary>
            /// Использовать имя представления для аудита по умолчанию.
            /// </summary>
            public static bool UseDefaultView = false;
            
            /// <summary>
            /// Включён ли аудит операции чтения.
            /// </summary>
            public static bool SelectAudit = false;
            
            /// <summary>
            /// Имя представления для аудирования операции чтения.
            /// </summary>
            public static string SelectAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции создания.
            /// </summary>
            public static bool InsertAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции создания.
            /// </summary>
            public static string InsertAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции изменения.
            /// </summary>
            public static bool UpdateAudit = false;
            
            /// <summary>
            /// Имя представления для аудирования операции изменения.
            /// </summary>
            public static string UpdateAuditViewName = "AuditView";
            
            /// <summary>
            /// Включён ли аудит операции удаления.
            /// </summary>
            public static bool DeleteAudit = true;
            
            /// <summary>
            /// Имя представления для аудирования операции удаления.
            /// </summary>
            public static string DeleteAuditViewName = "AuditView";
            
            /// <summary>
            /// Путь к форме просмотра результатов аудита.
            /// </summary>
            public static string FormUrl = "";
            
            /// <summary>
            /// Режим записи данных аудита (синхронный или асинхронный).
            /// </summary>
            public static ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode WriteMode = ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode.Synchronous;
            
            /// <summary>
            /// Максимальная длина сохраняемого значения поля (если 0, то строка обрезаться не будет).
            /// </summary>
            public static int PrunningLength = 0;
            
            /// <summary>
            /// Показывать ли пользователям в изменениях первичные ключи.
            /// </summary>
            public static bool ShowPrimaryKey = false;
            
            /// <summary>
            /// Сохранять ли старое значение.
            /// </summary>
            public static bool KeepOldValue = true;
            
            /// <summary>
            /// Сжимать ли сохраняемые значения.
            /// </summary>
            public static bool Compress = false;
            
            /// <summary>
            /// Сохранять ли все значения атрибутов, а не только изменяемые.
            /// </summary>
            public static bool KeepAllValues = false;
        }
    }
}
