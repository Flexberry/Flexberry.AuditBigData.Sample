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
    /// Class1.
    /// </summary>
    // *** Start programmer edit section *** (Class1 CustomAttributes)

    // *** End programmer edit section *** (Class1 CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("AuditView", new string[] {
            "Field11 as \'Field11\'",
            "Field12 as \'Field12\'",
            "CreateTime as \'Create time\'",
            "Creator as \'Creator\'",
            "EditTime as \'Edit time\'",
            "Editor as \'Editor\'"})]
    [View("Class1E", new string[] {
            "Field11 as \'Field11\'",
            "Field12 as \'Field12\'"})]
    [View("Class1L", new string[] {
            "Field11 as \'Field11\'",
            "Field12 as \'Field12\'",
            "CreateTime",
            "Creator",
            "EditTime",
            "Editor"})]
    public class Class1 : ICSSoft.STORMNET.DataObject, IDataObjectWithAuditFields
    {
        
        private string fField11;
        
        private string fField12;
        
        private System.Nullable<System.DateTime> fCreateTime;
        
        private string fCreator;
        
        private System.Nullable<System.DateTime> fEditTime;
        
        private string fEditor;
        
        // *** Start programmer edit section *** (Class1 CustomMembers)

        // *** End programmer edit section *** (Class1 CustomMembers)

        
        /// <summary>
        /// Field11.
        /// </summary>
        // *** Start programmer edit section *** (Class1.Field11 CustomAttributes)

        // *** End programmer edit section *** (Class1.Field11 CustomAttributes)
        [StrLen(255)]
        public virtual string Field11
        {
            get
            {
                // *** Start programmer edit section *** (Class1.Field11 Get start)

                // *** End programmer edit section *** (Class1.Field11 Get start)
                string result = this.fField11;
                // *** Start programmer edit section *** (Class1.Field11 Get end)

                // *** End programmer edit section *** (Class1.Field11 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class1.Field11 Set start)

                // *** End programmer edit section *** (Class1.Field11 Set start)
                this.fField11 = value;
                // *** Start programmer edit section *** (Class1.Field11 Set end)

                // *** End programmer edit section *** (Class1.Field11 Set end)
            }
        }
        
        /// <summary>
        /// Field12.
        /// </summary>
        // *** Start programmer edit section *** (Class1.Field12 CustomAttributes)

        // *** End programmer edit section *** (Class1.Field12 CustomAttributes)
        [StrLen(255)]
        public virtual string Field12
        {
            get
            {
                // *** Start programmer edit section *** (Class1.Field12 Get start)

                // *** End programmer edit section *** (Class1.Field12 Get start)
                string result = this.fField12;
                // *** Start programmer edit section *** (Class1.Field12 Get end)

                // *** End programmer edit section *** (Class1.Field12 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class1.Field12 Set start)

                // *** End programmer edit section *** (Class1.Field12 Set start)
                this.fField12 = value;
                // *** Start programmer edit section *** (Class1.Field12 Set end)

                // *** End programmer edit section *** (Class1.Field12 Set end)
            }
        }
        
        /// <summary>
        /// CreateTime.
        /// </summary>
        // *** Start programmer edit section *** (Class1.CreateTime CustomAttributes)

        // *** End programmer edit section *** (Class1.CreateTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (Class1.CreateTime Get start)

                // *** End programmer edit section *** (Class1.CreateTime Get start)
                System.Nullable<System.DateTime> result = this.fCreateTime;
                // *** Start programmer edit section *** (Class1.CreateTime Get end)

                // *** End programmer edit section *** (Class1.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class1.CreateTime Set start)

                // *** End programmer edit section *** (Class1.CreateTime Set start)
                this.fCreateTime = value;
                // *** Start programmer edit section *** (Class1.CreateTime Set end)

                // *** End programmer edit section *** (Class1.CreateTime Set end)
            }
        }
        
        /// <summary>
        /// Creator.
        /// </summary>
        // *** Start programmer edit section *** (Class1.Creator CustomAttributes)

        // *** End programmer edit section *** (Class1.Creator CustomAttributes)
        [StrLen(255)]
        public virtual string Creator
        {
            get
            {
                // *** Start programmer edit section *** (Class1.Creator Get start)

                // *** End programmer edit section *** (Class1.Creator Get start)
                string result = this.fCreator;
                // *** Start programmer edit section *** (Class1.Creator Get end)

                // *** End programmer edit section *** (Class1.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class1.Creator Set start)

                // *** End programmer edit section *** (Class1.Creator Set start)
                this.fCreator = value;
                // *** Start programmer edit section *** (Class1.Creator Set end)

                // *** End programmer edit section *** (Class1.Creator Set end)
            }
        }
        
        /// <summary>
        /// EditTime.
        /// </summary>
        // *** Start programmer edit section *** (Class1.EditTime CustomAttributes)

        // *** End programmer edit section *** (Class1.EditTime CustomAttributes)
        public virtual System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (Class1.EditTime Get start)

                // *** End programmer edit section *** (Class1.EditTime Get start)
                System.Nullable<System.DateTime> result = this.fEditTime;
                // *** Start programmer edit section *** (Class1.EditTime Get end)

                // *** End programmer edit section *** (Class1.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class1.EditTime Set start)

                // *** End programmer edit section *** (Class1.EditTime Set start)
                this.fEditTime = value;
                // *** Start programmer edit section *** (Class1.EditTime Set end)

                // *** End programmer edit section *** (Class1.EditTime Set end)
            }
        }
        
        /// <summary>
        /// Editor.
        /// </summary>
        // *** Start programmer edit section *** (Class1.Editor CustomAttributes)

        // *** End programmer edit section *** (Class1.Editor CustomAttributes)
        [StrLen(255)]
        public virtual string Editor
        {
            get
            {
                // *** Start programmer edit section *** (Class1.Editor Get start)

                // *** End programmer edit section *** (Class1.Editor Get start)
                string result = this.fEditor;
                // *** Start programmer edit section *** (Class1.Editor Get end)

                // *** End programmer edit section *** (Class1.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Class1.Editor Set start)

                // *** End programmer edit section *** (Class1.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (Class1.Editor Set end)

                // *** End programmer edit section *** (Class1.Editor Set end)
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
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(Flexberry.Sample.AuditBigData.Class1));
                }
            }
            
            /// <summary>
            /// "Class1E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Class1E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Class1E", typeof(Flexberry.Sample.AuditBigData.Class1));
                }
            }
            
            /// <summary>
            /// "Class1L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View Class1L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("Class1L", typeof(Flexberry.Sample.AuditBigData.Class1));
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
